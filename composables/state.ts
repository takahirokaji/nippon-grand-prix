// import useState はいらないはずなのにエラーが出ます
// すると逆にエラー起きます。

export const useUser = () => {
  const name = useState<string>("name", () => "");
  const id = useState<string>("id", () => "");
  const icon = useState<string>("icon", () => "");

  return {
    name,
    id,
    icon,
  };
};

export const useUserSubs = () => {
  const viewed = useState<string[]>("viewed", () => null);
  const superLiked = useState<string[]>("super-liked", () => null);
  const liked = useState<string[]>("liked", () => null);
  const posted = useState<string[]>("posted", () => null);

  const setValue = (target, data) => {
    if (target === "viewed") {
      viewed.value = data;
    } else if (target === "super-liked") {
      superLiked.value = data;
    } else if (target === "liked") {
      liked.value = data;
    } else if (target === "posted") {
      posted.value = data;
    } else {
      console.log("unexpected.target");
    }
  };

  return {
    viewed,
    superLiked,
    liked,
    posted,
    setValue,
  };
};
