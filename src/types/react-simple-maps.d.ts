declare module "react-simple-maps" {
    import * as React from "react";

    export interface GeographyProps {
        geography: any;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
    }

    export interface GeographiesProps {
        geography: string | object;
        children: (data: { geographies: any[]; projection: any }) => React.ReactNode;
    }

    export interface ComposableMapProps extends React.PropsWithChildren {
        projectionConfig?: object;
        style?: React.CSSProperties;
    }


    export const ComposableMap: React.FC<ComposableMapProps>;
    export const Geographies: React.FC<GeographiesProps>;
    export const Geography: React.FC<GeographyProps>;
}
