import React, { ReactNode, useEffect, useState } from 'react';
import { DataProvider } from '@plasmicapp/loader-nextjs';
import client from '../apollo-client';
import { gql } from "@apollo/client";

function useFetchPage(pageUrl: string) {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (!pageUrl) return;

    const fetchData = async () => {
      const { data } = await client.query({
        query: gql`
          query {
            pageCollection (where:{ url: "${pageUrl}" }) {
              items {
                title
                url
                author
                image {
                  url
                  width
                  height
                }
                tagline
              }
            }
          }          
          `,
      });
      setResponse(data?.pageCollection?.items ?? []);
    };

    fetchData();
  }, [pageUrl]);

  return response;
}

export interface PageBoxProps {
  children?: ReactNode;
  pageUrl?: string;
  className?: string;
}

export function PageBox({ children, className, pageUrl }: PageBoxProps) {
  // A hook that you've defined for fetching product data by slug
  const response = useFetchPage(pageUrl);
  return (
    <div className={className}>
      <DataProvider name="page" data={{ data: response }}>
        {children}
      </DataProvider>
    </div>
  );
}