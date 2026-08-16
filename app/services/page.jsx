import View from './view';

export const metadata = {
  title: "Services — Research, UX, design, development, marketing",
  description: "Research, UX, design, development, marketing and growth delivered by one partner across every stage of the product lifecycle.",
  alternates: { canonical: "https://uxvel.com/services/" },
  openGraph: { title: "Services — Research, UX, design, development, marketing", description: "Research, UX, design, development, marketing and growth delivered by one partner across every stage of the product lifecycle.", url: "https://uxvel.com/services/", siteName: 'UxVel', type: 'website' },
};

export default function Page() {
  return <div data-pinmode="stack" style={{ display: 'contents' }}><View /></div>;
}
