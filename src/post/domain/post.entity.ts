export default class Post {
    create(
        title: string,
        body: string
    ) {
        if (!title) throw new Error('no title')
        if (!body) throw new Error('no body')

        return {
            title,
            body,
            createdAt: () => Date.now()
        }
    }
}