const quotes = [

    {
        quotes : "너는 쓸 일이 없다고 한다. 그렇다면 쓸 일이 없는 것을 쓰라.",
        author : "프리니우스 2세"
    },
    {
        quotes :  "일기---자기의 생활 중에서, 자기 자신에 대해서 얼굴이 붉어지지 않고 말할 수가 있는 부분에 관한 나날의 기록",
        author : "A.G.비어스"
    },
    {
        quotes : "나는 여행을 할 때 반드시 나의 일기장을 가지고 간다. 왜냐하면 기차에서 읽을 감각적인 것이 꼭 필요하기 때문이다.",
        author : "O.와일드"
    },
    {
        quotes : "우리는 생명을 너무나도 중시했다. 생명의 일기가 행복의 일기인 일은 드물다.",
        author : "S.스티븐즈"
    },
    {
        quotes : "과거를 기억하지 않는 사람은 그것을 반복하는 사람이다.",
        author : "조지 산타야나"
    },
    {
        quotes : "기록은 기억을 남긴다",
        author : "그라시안"
    },
    {
        quotes : "당장 어떤 것을 잊고 싶다면, 기억할 수 있게 적어 두어라.",
        author : "에드가 앨런 포"
    },
    {
        quotes : "기록되지 않은 것은 기억되지 않는다",
        author : "백범 일지"
    },
    {
        quotes : "시작하라. 그 자체가 천재성이고 힘이며, 마력이다.",
        author : "괴테"
    },
    {
        quotes : "일기를 꾸준히 써라. 그렇다면 언젠가는 일기가 너를 간직할 것이다",
        author : "메이 웨스트"
    },
    {
        quotes : "계획이란 미래에 관한 현재의 결정이다",
        author : "드래커"
    }
    ];
    
    
    const quote = document.querySelector("#moveBack span:first-child");
    const author = document.querySelector("#moveBack span:last-child");
    
    
    //round 반올림  ceil 올림  floor 버림
    
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
        quote.innerText = todaysQuote.quotes;
        author.innerText = todaysQuote.author;
    
    
    setInterval(() =>{
        const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
        quote.innerText = todaysQuote.quotes;
        author.innerText = todaysQuote.author;
    },5000);


