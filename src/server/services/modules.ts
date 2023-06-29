import axios from "axios";

const http = axios.create({
  baseURL: "https://learn.microsoft.com/api"
});

type Module = {
  title: string,
  summary: string,
  uid: string,
  icon_url: string,
  products: string[],
  social_image_url: string,
  rating: {
    count: number,
    average: number
  },
  levels: string[],
  roles: string[],
  type: string,
  duration_in_minutes: number
}

type ModulesResponse = {
  modules: Module[]
}

export async function getModules(): Promise<Module[]> {
  const res = await http.get<ModulesResponse>("/catalog?type=modules");
  const modules = res.data.modules;

  return modules?.slice(0, 100);
}

export async function getModule({ id }: { id: string }): Promise<Module | undefined> {
  const res = await http.get<ModulesResponse>(`/catalog?uid=${id}`);
  const moduleItem = res.data.modules?.[0];

  return moduleItem;
}
