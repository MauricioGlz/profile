import {Stories} from "@/core/ui/components";
import {BusinessItem} from "@/core/ui/components/stories/items/BusinessItem";
import {UserItem} from "@/core/ui/components/stories/items/UserItem";
import {Container} from "@/core/ui/layers";

export default function StoriesPage() {
    return (
        <>
            <Container>
                <Stories>
                    <UserItem
                        size={60}
                        live={true}
                        liveText={"Live"}
                        liveColor={
                            "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                        }
                        src={
                            "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        ring
                        src={
                            "https://images.unsplash.com/photo-1578297691831-665468f1a738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        live
                        liveText={"On Air"}
                        liveColor={
                            "bg-gradient-to-r from-green-400 via-blue-600 to-indigo-700 dark:from-green-300 dark:via-blue-500 dark:to-purple-600"
                        }
                        src={
                            "https://images.unsplash.com/photo-1556817977-00e61f659427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        ring={true}
                        src={
                            "https://images.unsplash.com/photo-1550378492-f0f5b7cfd183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        src={
                            "https://images.unsplash.com/photo-1549925399-f86a57857352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        src={
                            "https://images.unsplash.com/photo-1546052781-3292a96e8583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDY0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        src={
                            "https://images.unsplash.com/photo-1546052678-a0799b4903c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDgxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                </Stories>
            </Container>

            <Container>
                <Stories>
                    <UserItem
                        size={60}
                        name="Akari Kitagawa"
                        live={true}
                        liveText={"Live"}
                        liveColor={
                            "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                        }
                        src={
                            "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Helena Smith"
                        ring={true}
                        src={
                            "https://images.unsplash.com/photo-1578297691831-665468f1a738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Mike Dowson"
                        live={true}
                        liveText={"On Air"}
                        liveColor={
                            "bg-gradient-to-r from-green-400 via-blue-600 to-indigo-700 dark:from-green-300 dark:via-blue-500 dark:to-purple-600"
                        }
                        src={
                            "https://images.unsplash.com/photo-1556817977-00e61f659427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Anna Luis"
                        ring={true}
                        src={
                            "https://images.unsplash.com/photo-1550378492-f0f5b7cfd183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Motoka 🥦🥬🥒"
                        src={
                            "https://images.unsplash.com/photo-1549925399-f86a57857352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Joshua Mayer"
                        src={
                            "https://images.unsplash.com/photo-1546052781-3292a96e8583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDY0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <UserItem
                        size={60}
                        name="Nicole"
                        src={
                            "https://images.unsplash.com/photo-1546052678-a0799b4903c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDgxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                </Stories>
            </Container>

            <Container>
                <Stories>
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        ring={true}
                        text="Gift Ideas for the New Year"
                        src={
                            "https://images.unsplash.com/photo-1609024849543-ff59df361d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwdHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        ring={true}
                        text="Our new products and pastries"
                        src={
                            "https://images.unsplash.com/photo-1622941367239-8acd68fa946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        }
                    />
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        text="All for washing"
                        src={
                            "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                        }
                    />{" "}
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        ring={true}
                        text="Pie making set"
                        src={
                            "https://images.unsplash.com/photo-1560621418-d0e61805932c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />{" "}
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        text="Frozen pastries and foods"
                        src={
                            "https://images.unsplash.com/photo-1618411640018-972400a01458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyb3N0ZWQlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <BusinessItem
                        width={130}
                        height={160}
                        radius={16}
                        text="What to order for dinner?"
                        src={
                            "https://images.unsplash.com/photo-1601118964938-228a89955311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                </Stories>
            </Container>

            <Container>
                <Stories>
                    <BusinessItem
                        width={140}
                        height={100}
                        ring={true}
                        text="Stream with Nashville"
                        src={
                            "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmVhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <BusinessItem
                        width={180}
                        height={100}
                        text="Founder Jana's QA"
                        src={
                            "https://images.unsplash.com/photo-1596801129863-038876fe4786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0cmVhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <BusinessItem
                        width={180}
                        height={100}
                        text="CS Go Gaming tips"
                        src={
                            "https://images.unsplash.com/photo-1597759493550-6ea6cbcb2cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0cmVhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />{" "}
                    <BusinessItem
                        width={140}
                        height={100}
                        text="Which streaming equipment to choose?"
                        src={
                            "https://images.unsplash.com/photo-1619190324856-af3f6eb55601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHN0cmVhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />{" "}
                    <BusinessItem
                        width={180}
                        height={100}
                        text="Fireside chat with couple"
                        src={
                            "https://images.unsplash.com/photo-1520966324358-40c3723e15d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHN0cmVhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <BusinessItem
                        width={160}
                        height={100}
                        text="Roomtour"
                        src={
                            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        }
                    />
                </Stories>
            </Container>
        </>
    );
}
