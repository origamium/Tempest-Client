import * as React from "react";
import { Dialog } from "@material-ui/core";
import { AddAccount } from "./AddAccount/AddAccount";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Redux/Store/StoreType";
import { closeDialogAction, dialogKeys } from "../../Redux/Slices/dialog";

type DialogContentsProps = {
    dialogKey: dialogKeys;
    handleClose: () => void;
};

const DialogContents: React.FC<DialogContentsProps> = ({ dialogKey, handleClose }) => {
    React.useEffect(() => {
        if (!dialogKey) {
            handleClose();
        }
    }, [dialogKey, handleClose]);

    switch (dialogKey) {
        case "add-account":
            return <AddAccount />;
        case "add-column":
            return <div />;
        case undefined:
            return <div />;
        default:
            console.error(`unknown dialog key: ${dialogKey}`);
            return <div />;
    }
};

export const TempestDialog: React.FC = () => {
    const dialogData = useSelector((store: StoreType) => store.dialog);
    const dispatch = useDispatch();

    const handleClose = React.useCallback(() => {
        dispatch(closeDialogAction());
    }, []);

    return (
        dialogData && (
            <Dialog open={!!dialogData.open}>
                <DialogContents dialogKey={dialogData.open} handleClose={handleClose} />
            </Dialog>
        )
    );
};
