import { motion } from "framer-motion";

const AudioLines = () => {
  return (
    <div className="flex items-end gap-[1px]">
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="w-[5px] bg-white rounded-full"
          animate={{ height: [6, 14, 8, 12, 6] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default AudioLines;
