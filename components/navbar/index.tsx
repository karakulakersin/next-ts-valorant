"use client"
import React from 'react';
import { Nav, Logo } from "@/components/navbar/styles";
import {useRouter} from "next/navigation";

export default function Navbar () {
    const router = useRouter()
    return (
        <Nav>
            <Logo src="/images/valorant.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  onClick={() => router.push('/agent-list')}/>
        </Nav>
    );
};

