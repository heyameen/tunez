"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import {
    useSessionContext,
    useSupabaseClient
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';

const AuthModal = () => {
    const { session } = useSessionContext();
    const router = useRouter();
    const { onClose, isOpen } = useAuthModal();

    const supabaseClient = useSupabaseClient();
    useEffect(() => {
        console.log("In Auth Modal component useEffect", session)
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Modal
            title="Welcome back"
            description="Login to your account."
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                supabaseClient={supabaseClient}
                providers={['github']}
                magicLink={true}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#EE732F',
                                brandAccent: '#EE732F',
                                defaultButtonBackgroundHover: '#3a383f',
                                defaultButtonBackground: '#303134',
                                defaultButtonText: 'white',
                                dividerBackground: '#3a383f',
                            }
                        }
                    }
                    // style: {
                    //     button: { background: '#ee732f', color: 'white' },
                    //     anchor: { color: '#3a383f' },
                    //     //..
                    // },
                }}
                // theme="light"
            />
        </Modal>
    );
}

export default AuthModal;