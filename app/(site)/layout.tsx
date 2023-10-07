import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider />
          <Sidebar>{children}</Sidebar>
        </UserProvider>
      </SupabaseProvider>
    </>
  );
}
