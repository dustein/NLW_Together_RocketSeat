import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain } from "class-transformer";

class ListTagService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        // let tags = await tagsRepositories.find();
        // tags = tags.map((tag) => ({...tag, nameCustom: `#${tag.name}`}));
        //vide Tags.ts em entities
        const tags = await tagsRepositories.find();


        return instanceToPlain(tags);
    }
};

export { ListTagService };