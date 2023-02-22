

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/eldaniloo/dio-portifolio/main/dio-portfolio/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}