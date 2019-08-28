import Vue from "vue";
//使用vue_router
//1.引入router组件 ：(1) 引入cdn 引入cdn的话，会让文件小一点，并且是动态改变的，一般在dev阶段使用cdn比较好。 (2) import 引入整个文件。import 会被webpack直接打包到main.js文件中。
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import AddUser from "./views/user/AddUser.vue";
import EditUser from "./views/user/EditUser.vue";
import Left from "./views/Home/Left.vue";
import Right from "./views/Home/Right.vue";
import Footer from "./views/Home/Footer.vue";

//2.使用use方法来注册Router组件插件。
Vue.use(Router);

//3.创建路由对象
const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/kk",
      children: [
        {
          path: "kk",
          components: {
            default: Left,
            right: Right,
            bottom: Footer
          }
        }
      ]
    },
    {
      //创建自定义的新的路由组件
      path: "/Login",
      name: "login",
      component: Login
    },
    {
      //创建自定义的新的路由组件
      path: "/user/:id",
      name: "user", //给这个路由命名，也可以不命名，但是命名了，那么这个路由就唯一指定了。
      // component: UserInfo //这样的方式引入组件，必须在上面进行import 导入，
      component: () => import("./views/UserInfo.vue"),
      //这样的引入方式是延迟加载组件的，webpack会把所有延迟加载的组件打包在一个js文件内部，让js文件减小，但是会多一次app请求。
      //跳转子路由的方法
      redirect: to => {
        //这个to参数代表了原本匹配上的路由对象 params是路由对象的参数对应的属性值。
        return `/user/${to.params.id}/edit`;
      },
      beforeEnter: (to, from, next) => {
        console.log("这个是路由对象的守卫"); //这个在全局路由守卫:beforeResolve 方法之前被调用。也就是说在路由对象被解析之前调用。
        next();
      },
      //给userInfo路由设置添加一个子路由的方法：
      children: [
        {
          path: "add", //=>/user/8888/add //路由嵌套的时候,路径带'/'的话，那么这个子路由指向根目录。不加'/'符号的话，才是在路由后面增加的属性。
          component: AddUser
        },
        {
          path: "edit", //=>/user/8888/edit
          component: EditUser
        }
      ]
    },
    {
      path: "/product/:id",
      name: "product",
      props: true,
      component: () => import("./views/Product.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

//4.导出之后也算可以结束了。但是我们想要给router加路由守卫的话，就不能直接让他导出。 先把这个全局路由器对象设置为一个常量 const，然后给这个常量赋值。

//创建一个全局钩子 （所有路由的变化都会触发全局守卫的执行。）

router.beforeEach((to, from, next) => {
  console.log("最先执行 全局路由守卫:beforeEach");
  //应用：前端的权限校验 或者发一些日志等操作。
  console.log("beforeEach to:", to); //代表了页面跳转指向那个的路由对象，这个对象中包含了params，body，等属性
  console.log("beforeEach from:", from); //代表从那个页面跳转来的那个页面的路由对象，属性与to相同。

  // next(); //next函数必须调用，否则后续的钩子不会执行，调用后会让当前钩子依次向后执行。 如果不想让页面再跳转了，就调用next(false);即可。
  //也可以让next()方法指向一个网站地址。
  // if (to.path != "/home") next("/home");
  next();
});
router.afterEach((to, from) => {
  console.log("afterEach to:", to);
  console.log("afterEach from:", from);
  console.log("最后执行 全局路由守卫:afterEach");
});
router.beforeResolve((to, from, next) => {
  console.log("全局路由守卫:beforeResolve");
  console.log("beforeResolve to:", to);
  console.log("beforeResolve from:", from);
  next(); //next函数必须调用，否则后续的钩子不会执行，调用后会让当前钩子依次向后执行。
});

export default router;
