import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/aboutus","routes/aboutus.tsx"),
    route("/booking","routes/booking.tsx"),
    route("/promotion","routes/promotion.tsx"),
    route("/products","routes/product.tsx"),
    route("/gallery","routes/gallery.tsx"),
    route("/reserve","routes/reserve.tsx"),
    route("/news","routes/news.tsx"),
] satisfies RouteConfig;
