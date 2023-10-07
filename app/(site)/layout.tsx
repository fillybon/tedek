import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SupabaseProvider>
        <ModalProvider />
        <Sidebar>{children}</Sidebar>
      </SupabaseProvider>
    </>
  );
}
