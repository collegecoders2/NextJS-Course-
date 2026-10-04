SERVER ACTIONS

useActionState - done
useFormStatus — Loading / Pending State -done

- when the user clicks Submit, there is no indication that the Server Action is running.
========================================================================================

Submit
   ↓
pending = true
   ↓
"Creating..."
   ↓
Server Action executes
   ↓
MongoDB insertion
   ↓
pending = false
   ↓
"Submit"

-----------------------------------------------------
