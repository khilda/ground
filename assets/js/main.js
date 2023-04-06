/**
 * Common Func
 */
document.querySelector("#gnbOpen")?.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.add("is-show");
  document.body.setAttribute("style", "overflow: hidden");
});
document.querySelector("#gnbClose")?.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("is-show");
  document.body.removeAttribute("style");
});
// theme
document.querySelector("#toggleTheme")?.addEventListener("click", (e) => {
  e.target.classList.toggle("toggle");
  document.body.classList.toggle("dark-theme");
});
// card Bookmark
document.querySelectorAll(".card-bookmark")?.forEach((boomark) => {
  boomark.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.classList.toggle("is-active");
  });
});
// tab
document.querySelectorAll(".tab-container")?.forEach((tab) => {
  const tabButtons = Array.from(tab.querySelector(".tab-header").children);
  const tabItems = Array.from(tab.querySelector(".tab-content").children);
  tabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      // init
      tabButtons.forEach((b) => b.classList.remove("is-active"));
      tabItems.forEach((t) => t.classList.remove("is-active"));
      // select click item
      e.target.classList.add("is-active");
      tabItems[idx]?.classList.add("is-active");
    });
  });
});

// select
// $("select").each(function () {
//   var $this = $(this),
//     numberOfOptions = $(this).children("option").length;
//   var selectClass = $this.attr("class");
//   $this.addClass("select-hidden");
//   $this.wrap('<div class="select-container"></div>');
//   $this.after(`<div class="${selectClass}"></div>`);

//   var $styledSelect = $this.next("div.select");
//   $styledSelect.text($this.children("option").eq(0).text());

//   var $list = $("<ul />", {
//     class: "select-options",
//   }).insertAfter($styledSelect);

//   for (var i = 0; i < numberOfOptions; i++) {
//     $("<li />", {
//       text: $this.children("option").eq(i).text(),
//       rel: $this.children("option").eq(i).val(),
//     }).appendTo($list);
//   }

//   var $listItems = $list.children("li");

//   $styledSelect.click(function (e) {
//     e.stopPropagation();
//     $("div.select.is-active")
//       .not(this)
//       .each(function () {
//         $(this).removeClass("is-active").next("ul.select-options").hide();
//       });
//     $(this).toggleClass("is-active").next("ul.select-options").toggle();
//   });

//   $listItems.click(function (e) {
//     e.stopPropagation();
//     $styledSelect.text($(this).text()).removeClass("is-active");
//     $this.val($(this).attr("rel")).change();
//     $list.hide();
//   });

//   $(document).click(function () {
//     $styledSelect.removeClass("is-active");
//     $list.hide();
//   });
// });