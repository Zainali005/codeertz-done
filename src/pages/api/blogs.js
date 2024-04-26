
export const config = {
    runtime: "experimental-edge",
};

export default async function handler(req) {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Hasura-Client-Name", "hasura-console");
        myHeaders.append("x-hasura-admin-secret", "52Dy5h9G#;Sy2owQ2RYWWWk67jinYUL*");

        var graphql = JSON.stringify({
            query: `query MyQuery {
                blogs {
                  author
                  comments
                  date
                  description
                  id
                  images
                  intro
                  title
                  views
                }
              }`
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
        };

        const resp = await fetch("https://xxmrosflewhpkjxiqhde.hasura.eu-central-1.nhost.run/v1/graphql", requestOptions)
        // console.log(resp.json())
        const response = new Response(
            JSON.stringify({ blogs: await resp.json() }),
            {
                status: 200,
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        return response;
    } catch (e) {
        return new Response(null, { status: 400, statusText: "Bad Request" });
    }
}
