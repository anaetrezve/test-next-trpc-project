import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getModules, getModule } from "~/server/services";

export const learnRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),
  modules: publicProcedure
    .query(async () => {
      const modules = await getModules();

      return {
        modules
      };
    }),
  module: publicProcedure
    .input(z.object({ moduleId: z.string() }))
    .query(async ({input}) => {
      const moduleItem = await getModule({ id: input.moduleId });

      return {
        module: moduleItem
      };
    }),
});
