# The Rewrite Trap: Fight the Urge to Start from Scratch

Have you ever felt the urge to start a project from scratch? Perhaps you have a new CTO or a new team lead, and after a few days of working on the existing codebase, you think it's better to start fresh. This feeling is common, but it can lead to what Phillip Giese calls "the rewrite trap". In a conference talk, Giese explained why we should fight the urge to rewrite everything, and what we can do instead.

## Why Rewrite?

Before diving into the trap, Giese clarified that he wasn't talking about cases where you have made a long-term decision over time that a rewrite is necessary. Instead, he was referring to situations where you feel the need to start from scratch quickly.

Giese pointed out that the urge to rewrite often comes from the following reasons:

- You don't need to learn new concepts
- You can follow your mental model
- You can work the way you want

While these reasons may sound appealing, they can lead to the rewrite trap.

## The Rewrite Trap

The rewrite trap is a cycle that starts with high productivity and ends up with technical debt and issues, just like the original codebase had. Giese illustrated the cycle with the following stages:

1. At first, the rewrite seems productive, and progress is fast compared to improving what's there.
2. The rewrite starts to uncover some of the bigger obstacles and hurdles the original codebase had to solve. Originally, the original codebase was probably very simple and a good way of doing things, and over time, it became more complex to overcome these obstacles. The edge cases and quirks start to come in to the rewrite, and many assumptions may turn out to be incorrect, leading to the need to slow things down and add technical debt.
3. The big rewrite ends up being riddled with tech debt and issues, just like the original codebase was at the start. Work slows down considerably as bugs and technical debt need to be addressed. In contrast, those who decided to gradually refactor the original system will have the knowledge and ability to add and change things, leading to a better architecture.

The rewrite trap can be tempting, but it can also be avoided.

## What Should We Do Instead?

Instead of starting from scratch, Giese suggested the following:

- Defer judgement, assume best intentions, and learn. Instead of assuming that the existing codebase is bad, assume that the people who created it had the best intentions and learn from them.
- Formalize what you don't understand and have open discussions. Be clear about what you don't understand and find out why things were done a certain way.
- Get to know the system that led to the current way of working before attempting to change it. Get to know the needs of people so you can cater to what their needs are.

By following these steps, you can avoid the rewrite trap and create a better architecture for your codebase.

## Conclusion

In conclusion, Giese advised moving out of your comfort zone and acknowledging that you don't have all the answers. Instead of starting from scratch, it's better to understand the existing codebase, learn from it, and gradually improve it. Only rebuild the parts that really matter. By doing so, you can create a better system without falling into the rewrite trap.