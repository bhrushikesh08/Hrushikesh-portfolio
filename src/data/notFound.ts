export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  backHomeCta: string;
}

export const notFoundData: NotFoundData = {
  code: "404",
  title: "Page or Section Not Found",
  description: "The requested section or address does not exist, has been removed, or contains an unverified URL link.",
  backHomeCta: "Back to Home",
};
