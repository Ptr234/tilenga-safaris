"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";
import { ReactNode } from "react";

interface LoadingLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
}

export default function LoadingLink({ 
  href, 
  children, 
  className, 
  onClick,
  target,
  ...props 
}: LoadingLinkProps) {
  const { setIsLoading } = useLoading();
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a special click (new tab, etc), let it be
    if (target === "_blank" || e.ctrlKey || e.metaKey) return;

    e.preventDefault();
    
    // Trigger loading immediately
    setIsLoading(true);

    if (onClick) onClick();

    // Small delay to allow animation to start before Next.js begins route transition
    setTimeout(() => {
      router.push(href.toString());
    }, 100);
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleNavigation}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
}
