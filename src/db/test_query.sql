SELECT 
    t.id, 
    t.title, 
    t.due_time, 
    c.label AS category, 
    c.color, 
    p.text_color AS priority_color
FROM tasks t
JOIN categories c ON t.category_id = c.id
JOIN priority_styles p ON t.priority = p.priority_level;

UPDATE tasks 
SET created_at = '2026-08-05T01:46:00.000Z'
WHERE title = 'TEST3';