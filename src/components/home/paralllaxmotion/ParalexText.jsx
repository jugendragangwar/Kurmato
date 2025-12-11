import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

const ParalexText = ({ children, baseVelocity = 100, startMoving }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 70,
    stiffness: 500
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    if (startMoving) {
      let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div className="pb-4 flex whitespace-nowrap" style={{ x }}>
        <p className="mr-8">{children}</p>
        <p className="mr-8">{children}</p>
        <p className="mr-8">{children}</p>
        <p className="mr-8">{children}</p>
      </motion.div>
    </div>
  );
};

export default ParalexText;
