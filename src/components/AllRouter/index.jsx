import { useRoutes } from "react-router-dom";
import { clientRoutes } from "../../routes/client";
import { adminRoutes } from "../../routes/admin";

function AllRouter() {
    const elements = useRoutes([
        ...clientRoutes,
        ...adminRoutes,
    ]);

    return elements;
}

export default AllRouter;
