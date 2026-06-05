import Link from "next/link";
export default function SlugPage() {
  return (
    <>
      <h2>Meal Detail</h2>
      <Link href="/community">Community</Link>
      <Link href="/meals/share">Shared</Link>
    </>
  );
}
