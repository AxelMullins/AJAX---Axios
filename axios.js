(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    (async function getData() {
        try {
            const res = await axios("https://jsonplaceholder.typicode.com/users");

            res.data.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.id}: ${el.name} -- ${el.email}`;
                $fragment.appendChild($li);
            })
            $axios.appendChild($fragment);
        }
        catch (error) {
            $axios.innerHTML = error;
        }
    })();
})();