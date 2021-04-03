import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectorty = path.join(process.cwd(), "posts");

export function getSortedPostData() {
    const fileNames = fs.readdirSync(postsDirectorty);

    const allPostsData = filename.map(fileName => {
        const id = fileName.replace(/\.md$/,"");

        const fullPath = path.join(postsDirectorty, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    });
    return allPostsData.sort((a,b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}