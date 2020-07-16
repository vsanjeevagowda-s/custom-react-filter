SELECT b.id, b.title, b.description, c.description as comments from blogs b
LEFT JOIN comments c on b.id=c.blog_id