import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-low dark:bg-surface-container-lowest rounded-t-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] text-body-md font-body-md transition-all duration-300 ease-out mt-12 relative z-10">
      <div className="hover:translate-y-[-2px] transition-transform">
        <Link href="/">
          <img src="/TecWrites-Logo-03.png" alt="TecWrites Logo" className="h-32 w-auto" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-label-caps font-label-caps">
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/capabilities">Capabilities</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/services/web">Web Services</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/services/ai">AI Services</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/services/publishing">Publishing</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/lab">Lab</Link>
        <Link className="text-primary font-semibold hover:translate-y-[-2px] transition-transform" href="/studio">Studio</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/blog">Blog</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/contact">Contact</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/privacy">Privacy</Link>
        <Link className="text-on-surface-variant hover:text-primary hover:translate-y-[-2px] transition-transform" href="/terms">Terms</Link>
      </div>
      <div className="text-on-surface dark:text-on-surface-variant text-sm text-center md:text-right">
        © {new Date().getFullYear()} TecWrites Studio. All rights reserved.
      </div>
    </footer>
  );
}

