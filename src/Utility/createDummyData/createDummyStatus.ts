import { IStatus } from "../../datatype/Contents/Article/Status";
import { ArticleIdentifier } from "../../datatype/Contents/Article/ArticleIdentifier";
import { nanoid } from "nanoid";
import { createDummyUser } from "./createDummyUser";
import sampleImage from "../../Component/__testdata__/header/header";

export const createDummyStatus = (): IStatus => ({
    article: { articleType: ArticleIdentifier.status },
    id: nanoid(16),
    user: createDummyUser(),
    date: Date.now().toString(),
    text: nanoid(Math.floor(Math.random() * 100)),
    isThread: false,
    image: Array.from({ length: Math.floor(Math.random() * 4) }).map(() => sampleImage.sample),
});
