CREATE OR REPLACE FUNCTION public.notify_event()
   RETURNS trigger
   LANGUAGE plpgsql
   AS
$$
BEGIN
   PERFORM pg_notify('new_request', row_to_json(NEW)::text);
   RETURN NULL;
END;
$$

CREATE EVENT TRIGGER update_requests
   AFTER INSERT
   ON requests
   FOR EACH ROW
   EXECUTE PROCEDURE notify_event();