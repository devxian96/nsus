import { useState, useCallback } from "react";

const [, updateState] = useState<object>();
const forceUpdate = useCallback(() => updateState({}), []);

export default forceUpdate;
