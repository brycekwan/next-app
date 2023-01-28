import { useSelector } from '@plasmicapp/loader-nextjs';
import React from 'react';

export function ProductTitle({ className }: { className?: string }) {
    const productData = useSelector('product');
    return (
        <div className={className}>{productData?.title ?? 'This must be inside a ProductCollection or ProductBox'}</div>
    );
};