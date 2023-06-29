import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getModules, getModule } from "~/server/services";

export const learnRouter = createTRPCRouter({
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
