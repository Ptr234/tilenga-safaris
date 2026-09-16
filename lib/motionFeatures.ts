// Isolated in its own module so LazyMotion's dynamic import() actually
// code-splits the framer-motion animation engine into a separate chunk
// instead of bundling it synchronously with everything else.
import { domAnimation } from "framer-motion";

export default domAnimation;
