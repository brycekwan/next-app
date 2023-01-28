import { DataProvider, usePlasmicQueryData } from '@plasmicapp/loader-nextjs';
import React, { ReactNode } from 'react';

export interface TitleProps {
    children: ReactNode;
    productSlug?: string;
  }

export function ProductBox(props) {
    const { children, productSlug } = props;
    const {data} = usePlasmicQueryData("/tweets", async () => {
        const resp = await fetch("https://studio.plasmic.app/api/v1/demodata/tweets");
        return await resp.json();
      });

    // Render <DataProvider /> without wrapping div
    return (
      <DataProvider name="product" data={data}>
        {children}
      </DataProvider>
    );
  }