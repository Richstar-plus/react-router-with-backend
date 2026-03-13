import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </div>
  );
}
