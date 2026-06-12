import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";
import BlogHero from "../components/blog/BlogHero";
import Blogs from "../components/blog/Blogs";

export default function Leadership() {
  return (
    <PageTransition>
      <Navbar />
      <BlogHero />
      <Blogs />
      <Footer />
    </PageTransition>
  );
}
