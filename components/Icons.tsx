import React from 'react';
import { Check, Zap, Play, LayoutGrid, Monitor, ShieldCheck, ChevronDown, Star } from 'lucide-react';

export const IconCheck = ({ className }: { className?: string }) => <Check className={className} />;
export const IconZap = ({ className }: { className?: string }) => <Zap className={className} />;
export const IconPlay = ({ className }: { className?: string }) => <Play className={className} />;
export const IconGrid = ({ className }: { className?: string }) => <LayoutGrid className={className} />;
export const IconMonitor = ({ className }: { className?: string }) => <Monitor className={className} />;
export const IconShield = ({ className }: { className?: string }) => <ShieldCheck className={className} />;
export const IconChevronDown = ({ className }: { className?: string }) => <ChevronDown className={className} />;
export const IconStar = ({ className }: { className?: string }) => <Star className={className} fill="currentColor" />;