

async function main() {
    const { result } = await fetch('http://3.36.34.86:1234/add?a=12&b=34').then(res => res.json());
    document.body.append(result);
}
main();