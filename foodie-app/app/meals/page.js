
import Link from "next/link";
export default function MealsPage() {
  return (
    <>
      <h2>Meals</h2>
      <Link href="/community">Community</Link>
      <Link href="/meals/share">Shared</Link>
    </>
  );
}
