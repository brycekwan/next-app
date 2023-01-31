import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import { Banner } from "./components/banner";
import { Hero } from "./components/hero";
import { Title } from "./components/title";
import { PageBox } from "./components/page-box";
import { ProductBox } from "./components/product-box";
import { ProductTitle } from "./components/product-title";
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "g2q64gaqCG1FefukUTqm17", // ID of a project you are using
      token:
        "tcIEl0cnpVrIEI60U4tUazzNBqlJ26AVfUHZIICSYwURQzc71NFq40N2kTWD28djc07ZQSabdOu1bIsai3McQ", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});

PLASMIC.registerComponent(Banner, {
  name: "Banner",
  props: {
    description: "string",
    className: "string",
    theme: {
      type: "choice",
      options: ["light", "dark"],
    },
  },
});

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    title: "string",
    className: "string",
    imagePath: "string",
    description: "string",
    theme: {
      type: "choice",
      options: ["light", "dark"],
    },
  },
});

PLASMIC.registerComponent(Title, {
  name: "Title",
  props: {
    title: "string",
    className: "string",
    theme: {
      type: "choice",
      options: ["light", "dark"],
    },
  },
});

PLASMIC.registerComponent(PageBox, {
  name: "Page Data",
  providesData: true,
  props: {
    children: "slot",
    className: "string",
    pageUrl: "string",
  },
});

PLASMIC.registerComponent(ProductBox, {
  name: "Product Box",
  providesData: true,
  props: {
    children: "slot",
    className: "string",
    productSlug: "string",
  },
});

PLASMIC.registerComponent(ProductTitle, {
  name: "Product Title",
  props: {
    className: "string",
  },
});

PLASMIC.registerComponent(Button, {
  name: "Material Button",
  props: {
    children: "slot",
    variant: { 
      type: "choice", 
      options: ["contained", "outlined", "text", "string"]
    }
  },
});

PLASMIC.registerComponent(Accordion, {
  name: "Material Accordion",
  props: {
    children: "slot",
    defaultExpanded: "boolean"
  },
});

PLASMIC.registerComponent(AccordionSummary, {
  name: "Material Accordion Summary",
  props: {
    children: "slot",
  },
});

PLASMIC.registerComponent(AccordionDetails, {
  name: "Material Accordion Details",
  props: {
    children: "slot",
  },
});
