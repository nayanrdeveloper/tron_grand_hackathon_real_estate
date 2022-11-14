import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      colors: {
        nav_blue: "#274abb",
        light_text: "#666",
        heading_text: "#444",
        card_border: "#e7e7e7",
        property_background: "f5f7fb",
        tag: "#FF385C",
        property_detail_border: "#eaeff5",
        input_heading_border: "#ddd",
        
      },
      backgroundImage: {
        'wave_pattern': "url('/bg-white-3.png')"
      },
      boxShadow: {
        propertyDetail: "0 0 10px 1px rgb(71 85 95 / 8%)"
      }
    },
  },
  shortcuts: {
    nav_hover:
      "px-4 py-2 duration-300 hover:(bg-nav_blue rounded-sm text-white cursor-pointer)",
    connect_wallet: "bg-nav_blue px-3 rounded-md text-white h-10",
    category_tag: "bg-tag text-white px-6 py-1 rounded-lg",
    details_card: "p-6 border border-property_detail_border rounded-sm shadow-propertyDetail",
    input_heading: "text-tag font-bold text-3xl border-b border-input_heading_border pb-2",
    input_border: "border border-input_heading_border w-full h-10 rounded-md focus:ring-black focus:border-black p-2.5",
    input_label: "text-heading_text font-normal  capitalize",
    input_textarea: "border border-input_heading_border w-full h-28 rounded-md focus:ring-black focus:border-black p-2.5"
  },
});
