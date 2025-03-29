export const githubProjects = (async () => {
    const response = await fetch('https://api.github.com/users/pimatis/repos');
    const data = await response.json();
    return data.filter((repo: any) => repo.fork === false);
})();
