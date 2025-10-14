// 경로 문자열을 관리하는 상수 객체
const PATHS = {
    // Root Layout의 중첩된 경로
    ROOT: {
        //Root Layout의 기본 경로 
        INDEX: "/",
        ABOUT: "/about",
        POSTS: "/posts",
        POST_DETAIL: "/posts/:postId",
        getPostDetail: (postId) => `/posts/${postId}`,
        PROFILE: "/profile",
    },
    AUTH: {
        INDEX: "/auth",
        LOGIN: "login",
        SIGNUP: "signup"
    },
};

export default PATHS;