"use client"
import React from 'react';
import { Nav, Button } from "@/components/navbar/styles";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Navbar () {
    const router = useRouter()
    return (
        <Nav>
            <Image src="/images/Valorant-Emblem.png"
                   alt="Logo"
                   width={100}
                   height={50}
                   onClick={() => router.push('/')}/>
            <Button onClick={() => router.push('/')}>Ana Sayfa</Button>
        </Nav>
    );
};

