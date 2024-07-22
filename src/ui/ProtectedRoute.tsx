import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseAuthorize from "../features/authentication/UseAuthorize";



type ProtectedRouteProps = {
  children: React.ReactNode;

}
const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = UseAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth", { replace: true });
  }, [isAuthenticated,  isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <p>Loading</p>
        {/* <Loading /> */}
      </div>
    );
  }
  if (isAuthenticated) return children;
};
export default ProtectedRoute;
