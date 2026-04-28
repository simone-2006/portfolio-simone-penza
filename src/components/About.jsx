import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          About
        </p>

        <div className="grid md:grid-cols-[auto_1fr] gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative shrink-0">
              <div className="w-40 h-40 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                <span className="text-slate-600 font-mono text-4xl font-bold select-none">
                  SP
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Chi sono
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-base max-w-2xl">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                corrupti!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus quae nemo asperiores reprehenderit molestiae
                dignissimos fugiat neque voluptatem, animi dolor rem hic ipsa
                temporibus? At fugiat, numquam quo, recusandae sit quisquam unde
                ipsa esse fuga explicabo quam inventore sapiente rerum
                repellendus error facilis alias voluptatem eligendi eius
                incidunt! Animi error nobis vero laboriosam, dolorem
                perferendis, vitae et, soluta dolore dolorum nisi deleniti fuga
                ratione suscipit alias mollitia accusantium eos non magnam
                numquam quae enim consequuntur. Laudantium voluptatum iusto iure
                aliquid nisi quod iste eveniet sit, consequuntur ullam commodi
                repudiandae autem omnis debitis minima ea recusandae culpa
                quidem nostrum laboriosam provident molestiae maxime. Veniam
                praesentium repellat dolor accusamus, pariatur quo nesciunt nemo
                suscipit provident iure dicta non aperiam molestiae ducimus
                aliquam blanditiis numquam quod quas nostrum expedita quisquam
                enim quidem doloribus. Odio quaerat earum temporibus tenetur
                nulla incidunt mollitia sapiente, quod consectetur dicta quas
                ipsam at illum quisquam soluta placeat quam, sint eveniet
                voluptatum qui, porro minus praesentium necessitatibus! Quasi at
                dolorem, aut omnis libero consectetur quas nesciunt quibusdam
                optio, alias culpa repudiandae? Veniam adipisci quaerat
                voluptatibus eveniet non! A, cumque est repellat ad debitis quia
                sint facere atque odio recusandae dolore provident ipsam eaque
                placeat saepe earum vel explicabo expedita!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
