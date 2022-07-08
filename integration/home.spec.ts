import { Selector, ClientFunction } from "testcafe";

fixture`Home`.page("http://localhost:3000");

const sidebar = Selector("#sidebar").shadowRoot();
const main = Selector("#main").shadowRoot();
const getScrollTop = ClientFunction(() => window.scrollY);

test("should show menu collapse, hide menu expand", async (t) => {
  await t.click(Selector("label"));
  await t.expect(Selector("#collapse").visible).ok();
  await t.expect(Selector("#expand").visible).notOk();
});

test("should scroll to content, on quick links click", async (t) => {
  await t.click(Selector("label"));
  await t.click(sidebar.find("a").withExactText("Code"));
  await t.wait(2000);

  const st = await getScrollTop();
  const elTop =
    (await main.find("#code").offsetTop) + (await Selector("#main").offsetTop);
  await t.expect(st).within(elTop - 1, elTop + 1); // allow some margin for subpixel errors
});
